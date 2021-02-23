class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :images
  has_many :images
end
