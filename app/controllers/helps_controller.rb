class HelpsController < ApplicationController

  def new 
    @help = Help.new(user:current_user)
  end

  def create
    @help = Help.new(help_params)
    @help.user_id = current_user.id

    unless @help.save
      render json: @help.errors, status: :unprocessable_entity
    end

    # respond_to do |format|
    #   if @help.save
    #     format.html { redirect_to @help, notice: 'Help was successfully created.' }
    #     format.json { render :show, status: :created, location: @help }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @help.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  private

  def help_params
    params.fetch(:help, {}).permit(
      :title,
      :description,
      :request_type,
      :location_long,
      :location_lat,
      :status,
      :fulfilled
    )
  end

end
