import Analytics from "analytics";

/* initialize analytics and load plugins */
export const analytics = Analytics({
  debug: true,
  plugins: [
    ottoProviderPlugin({
      apiUrl: "www.otto.com",
    }),
  ],
});

/* This is an example plugin */
function ottoProviderPlugin(userConfig = {}) {
  return {
    NAMESPACE: "Otto-example",
    config: userConfig,
    initialize: ({ payload }) => {
      console.log("Load stuff");
    },
    page: ({ payload }) => {
      console.log(
        `Example Page > [payload: ${JSON.stringify(payload, null, 2)}]`
      );
    },
    /* Track event */
    track: ({ payload }) => {
      console.log(
        `Example Track > [${payload.event}] [payload: ${JSON.stringify(
          payload,
          null,
          2
        )}]`
      );
    },
    /* Identify user */
    identify: ({ payload }) => {
      console.log(
        `Example identify > [payload: ${JSON.stringify(payload, null, 2)}]`
      );
    },
    loaded: () => {
      return true;
    },
    ready: () => {
      console.log("ready: exampleProviderPlugin");
    },
  };
}

window.Analytics = analytics;

/* export analytics for usage through the app */
export default analytics;
