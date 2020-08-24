  def error_response(error)
    OpenStruct.new(success?: false, error: error, object: self)
  end

  def success_response(result)
    OpenStruct.new(success?: true, error: nil, result: result, object: self)
  end
end
