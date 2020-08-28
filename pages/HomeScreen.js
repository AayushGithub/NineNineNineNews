import React from 'react';
import { FlatList, SafeAreaView} from 'react-native';

// Import getNews from news.js
import { getNews } from '../src/TodayNews';
import Article from '../src/components/Article';

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { articles: [], refreshing: true };
      this.fetchNews = this.fetchNews.bind(this);
    }
  
    componentDidMount() {
      this.fetchNews();
    }
  
    fetchNews() {
      getNews()
        .then(articles => this.setState({ articles, refreshing: false }))
        .catch(() => this.setState({ refreshing: false }));
    }
  
    handleRefresh() {
      this.setState(
        {
          refreshing: true
        },
        () => this.fetchNews()
      );
    }
  
    render() {
      return (
        <SafeAreaView style={{ backgroundColor: '#333333'}}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
        </SafeAreaView>
      );
    }
  }