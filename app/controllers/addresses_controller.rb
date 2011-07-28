class AddressesController < ApplicationController

  def index
    @addresses = Address.all
  end

  def new
    @address = Address.new
  end

  def create
    @address = Address.new params[:address]
    if @address.save
      redirect_to addresses_path
    else
      render 'new'
    end
  end
end
