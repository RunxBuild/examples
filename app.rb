require "sinatra"
require "json"

set :bind, "0.0.0.0"
set :port, ENV["PORT"] || 3000

# Allow all hosts
set :host_authorization, permitted_hosts: []

get "/" do
  content_type :json
  { message: "RunxBuild Ruby service running" }.to_json
end
