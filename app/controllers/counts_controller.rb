class CountsController < ApplicationController

  def show
    render json: { count: 100 }
  end

  def update
    render json: { count: params[:count] }
  end
end
