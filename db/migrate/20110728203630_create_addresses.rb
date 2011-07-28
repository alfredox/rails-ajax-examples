class CreateAddresses < ActiveRecord::Migration
  def self.up
    create_table :addresses do |t|
      t.string :street
      t.string :no_ext
      t.string :no_int
      t.string :city
      t.string :zip_code
      t.string :country
      t.timestamps
    end
  end

  def self.down
    drop_table :addresses
  end
end
