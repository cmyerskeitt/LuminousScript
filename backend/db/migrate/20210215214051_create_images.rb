class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :image_url
      t.string :caption
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
