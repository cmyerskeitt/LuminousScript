class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image_url, :caption, :user_id, :user
  # belongs_to :user
end