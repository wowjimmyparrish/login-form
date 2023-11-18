class User < ApplicationRecord
    # macro used with bcrypt for authentication/hashing of password
    has_secure_password 

    # validations for :email and :password
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 6..15 }, confirmation: :true
end
