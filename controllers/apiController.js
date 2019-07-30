function index(req, res){
  res.json({
    message: "Available Endpoints for Asset Management Tool - updated 30Jul2019",
    documentation_url: "https://github.com/rccacho/asset_management_tool",
    base_url: "localhost:3000",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "describes available endpoints"
      }
    ]
  })
};

module.exports = {
  index: index
}
