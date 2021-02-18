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
Image.create(image_url: "https://images.unsplash.com/photo-1547226846-000337daf073?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBkYWRkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60", caption: "A father's love", user_id: dad.id)
Image.create(image_url: "https://images.unsplash.com/photo-1600880291599-c5eca68b88b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwdG9kZGxlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60", caption: "Why so serious?", user_id: toddler.id)
Image.create(image_url: "https://images.unsplash.com/photo-1581297756481-dc9be2ad5583?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsYWNrJTIwdG9kZGxlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60", caption: "Naptime?", user_id: toddler.id)