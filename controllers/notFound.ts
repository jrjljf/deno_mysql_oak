export default ({ response }: { response: any }) => {
    response.status = 404;
    response.body = {
      success: false,
      message: "该页面不存在",
    };
  };
  