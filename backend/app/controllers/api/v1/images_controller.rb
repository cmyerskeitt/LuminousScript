class Api::V1::ImagesController < ApplicationController
    def index
        images = Image.all
        render json: @images 
    end 

    def create 
        image = Image.new(image_params)
        if image.save
            render json: image, status: :accepted
        else 
            render json: {errors: image.errors.full_messages}, status: :unprocessible_entity
        end 
    end 

    private 

    def image_params 
        params.require(:image).permit(:image_url, :caption, :user_id)
    end 
   
end
