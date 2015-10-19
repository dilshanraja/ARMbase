class Post
  include Mongoid::Document
  field :title, type: String
  field :link, type: String
  field :upvotes, type: String
  field :integer, type: String

  has_many :comments
  belongs_to :user
end
