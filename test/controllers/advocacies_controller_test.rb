require 'test_helper'

class AdvocaciesControllerTest < ActionDispatch::IntegrationTest
  test "should get causindy" do
    get advocacies_causindy_url
    assert_response :success
  end

  test "should get rumahcerita" do
    get advocacies_rumahcerita_url
    assert_response :success
  end

end
