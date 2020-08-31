require_relative "../most_years_alive"

describe "/most_years_alive.rb" do

    it "returns [1945, 1946, 1947, 1948, 1949, 1950] when passed in [[1910, 1950], [1900, 1951], [1945, 2000]]" do  
        output = most_years_alive([[1910, 1950], [1900, 1951], [1945, 2000]])
        expect(output).to eq([1945, 1946, 1947, 1948, 1949, 1950])
    end

    it "returns [1951] when passed in [[1910, 1951], [1900, 1951], [1951, 2000]]" do  
        output = most_years_alive([[1910, 1951], [1900, 1951], [1951, 2000]])
        expect(output).to eq([1951])
    end

    it "returns [1905, 1906, 1907, 1908, 1909, 1910] when passed in [[1900, 1910], [1905, 1915], [1950, 2000]]" do  
        output = most_years_alive([[1900, 1910], [1905, 1915], [1950, 2000]])
        expect(output).to eq([1905, 1906, 1907, 1908, 1909, 1910])
    end

    it "returns [1905, 1906, 1907, 1908, 1909, 1910] when passed in [[1905, 1910]]" do  
        output = most_years_alive([[1905, 1910]])
        expect(output).to eq([1905, 1906, 1907, 1908, 1909, 1910])
    end

    it "returns [] when passed in an empty array" do  
        output = most_years_alive([])
        expect(output).to eq([])
    end
end