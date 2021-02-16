class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image_url, :caption, :user
end