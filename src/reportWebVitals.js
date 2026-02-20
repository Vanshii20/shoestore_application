const reportWebVitals = (callback) => {
  if (callback && callback instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID }) => {
      getCLS(callback);
      getFID(callback);
    });
  }
};

export default reportWebVitals;
