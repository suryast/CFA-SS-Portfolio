require 'test_helper'

class TechsControllerTest < ActionDispatch::IntegrationTest
  test "should get code" do
    get techs_code_url
    assert_response :success
  end

  test "should get iot" do
    get techs_iot_url
    assert_response :success
  end

  test "should get website" do
    get techs_website_url
    assert_response :success
  end

end
