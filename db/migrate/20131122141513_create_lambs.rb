class CreateLambs < ActiveRecord::Migration
  def change
    create_table :lambs do |t|
      t.boolean :is_silent, :default => true
      t.string :name
      t.timestamps
    end
  end
end
