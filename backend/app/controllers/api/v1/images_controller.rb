class Api::V1::ImagesController < ApplicationController
    def index
        images = Image.all
        render json: ImageSerializer.new(images) 
    end 

    def create 
        image = Image.new(image_params)
        if image.save
            render json: image, status: :accepted
        else 
            render json: {errors: image.errors.full_messages}, status: :unprocessible_entity
        end 
    end 

    def show
        image = Image.find_by_id(params[:id])
        if image
            render json: ImageSerializer.new(image) 
        else 
           redirect_to api_v1_images_path if !image
        end 
    end 

    def destroy
        image = Image.find_by_id(params[:id])
        image.destroy 
        render json: ImageSerializer.new(image) 
    end 


    private 

    def image_params 
        params.require(:image).permit(:image_url, :caption, :user_id)
    end 
   
end
