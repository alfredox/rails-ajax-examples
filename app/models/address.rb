class Address < ActiveRecord::Base

  def self.values_for_zip_code(zip_code)
    case zip_code
    when '55555'
      {:city => 'Guadalajara', :country => 'Mexico'}
    when '44444'
      {:city => 'Vancouver', :country => 'Canada'}
    when '66666'
      {:city => 'Monterrey', :country => 'Mexico'}
    when '77777'
      {:city => 'New York', :country => 'USA'}
    else
      {}
    end
  end

end
