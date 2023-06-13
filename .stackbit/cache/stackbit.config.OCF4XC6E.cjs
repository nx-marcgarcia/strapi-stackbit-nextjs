function stackbit_process_cwd_shim() { return "/Users/marcb/Documents/Projects/personal/strapi-stackbit-nextjs" }
// stackbit.config.js
module.exports = {
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
  contentSources: [
    {
      host: "http://localhost:1337",
      token: "sWFe7wK3XINtsb2b2qk3y45Sy8Z6zRy4M+oLjdvpzOCESAuIJnz5WaapRh5fTh/Hb+SRPjXsGNG1uiBSiMlZXA=="
    }
  ],
  models: {
    page: { type: "page", urlPath: "/{slug}" }
  }
};
//# sourceMappingURL=stackbit.config.OCF4XC6E.cjs.map
