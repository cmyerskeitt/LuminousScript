# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all

mom = User.create(name: 'Christine Myers Keitt')
dad= User.create(name: 'Micheal Myers Keitt')
toddler = User.create(name: 'Micheal Myers Keitt Jr')

Image.create(image_url: "https://images.unsplash.com/photo-1508205065970-cad01cebebb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80", caption: "A mother's love", user_id: mom.id)