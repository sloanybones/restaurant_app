class Api::RestaurantsController < ApplicationController

def index
render json: Restaurant.all
end

def create
restaurant= Restaurant.new(restaurant_params)
if restaurant.save
  render json: restaurant
else
  render json {errors: restaurant.errors }, status: :unprocessable_entity
end
end

def update

  restaurant = Restaurant.find(params[:id])
  restaurant.update(name: !restaurant.name)
  render json: restaurant
end

def destroy
  restaurant = Restaurant.find(params[:id]).destroy
  render json: restaurant
end

private

def restaurant_params
  params.require(:restaurant).permit(:name)
end
end



end
