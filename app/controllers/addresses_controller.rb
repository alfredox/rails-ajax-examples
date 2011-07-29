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

  def autocomplete_with_zip
    zip_code = params[:zip_code]
    render :json => Address.values_for_zip_code(zip_code).to_json
  end
end
