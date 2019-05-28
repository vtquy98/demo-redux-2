import { Provider } from "react-redux";
import App, { Container } from "next/app";
import store from "../store/store";
import withRedux from "next-redux-wrapper";

class AppRedux extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    const { store } = ctx || {};
    return { pageProps, store };
  }

  render() {
    const { Component, store, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(AppRedux);
