def continuous_numbers(arr)
    return arr.length if (arr.length <= 1)
      
    continuous_count = 1
    a_pointer = 0
    b_pointer = 1
    
    while (b_pointer < arr.length)
      if (arr[a_pointer] === arr[b_pointer])
        b_pointer += 1
        continuous_count = [(b_pointer - a_pointer), continuous_count].max
      else
        a_pointer = b_pointer
        b_pointer += 1
      end
    end
    return continuous_count
end