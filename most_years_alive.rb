def most_years_alive(arr)
    years_alive_count_hash = Hash.new

    arr.each do |years|
      years_range = Array (years[0]..years[1])
      years_range.each do |year|
        years_alive_count_hash[year]? years_alive_count_hash[year] += 1 : years_alive_count_hash[year] = 1
      end
    end

    return find_max_values(years_alive_count_hash)
end

def find_max_value_keys(years_alive_hash)
   maxAlive = years_alive_hash.values.max
   return years_alive_hash.select { |year, count| count == maxAlive }.keys
end