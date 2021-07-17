import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from 'components/Layout/ContentsWrap';
import Header from 'components/Layout/Header';
import clsx from 'clsx';
import Banner from './_comps/Banner';
import RankingTab from './_comps/RankingTab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: 640,
  },
  mainTabWrap: {
    padding: '30px 0 100px',
  },
  tabWrap: {
    display: 'flex',
    margin: '0 15px',
    borderRadius: 6,
    backgroundColor: theme.palette.grey[200],
  },
  tabBtn: {
    width: '100%',
    height: 40,
    color: theme.palette.grey[600],
    fontSize: '13px',
    borderRadius: 6,
    backgroundColor: theme.palette.grey[200],
    border: 0,
  },
  selected: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border: '1px solid #EEEEEE',
  },
}));

const TABS = [
  {
    label: '랭킹',
    content: <RankingTab />,
  },
  {
    label: '코디',
    content: '2',
  },
  {
    label: '업데이트',
    content: '3',
  },
];

const Index = () => {
  const classes = useStyles();

  // Main Tab
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={classes.root}>
      <Layout>
        <Header />
        <Banner />
        <div className={classes.mainTabWrap}>
          <div className={classes.tabWrap}>
            {TABS.map((tab, index) => (
              <button
                type="button"
                key={tab.label}
                onClick={() => onClickTab(index)}
                className={clsx(
                  classes.tabBtn,
                  activeIndex === index && classes.selected
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {TABS[activeIndex].content}
        </div>
      </Layout>
    </div>
  );
};

export default Index;
