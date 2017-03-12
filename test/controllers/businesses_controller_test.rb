require 'test_helper'

class BusinessesControllerTest < ActionDispatch::IntegrationTest
  test "should get buziebee" do
    get businesses_buziebee_url
    assert_response :success
  end

  test "should get kertanegara" do
    get businesses_kertanegara_url
    assert_response :success
  end

  test "should get squarentie" do
    get businesses_squarentie_url
    assert_response :success
  end

end
