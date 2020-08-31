require_relative "../continuous_numbers"

describe "/continuous_numbers.rb" do

    it "returns 0 when passed in an empty array" do  
        output = continuous_numbers([])
        expect(output).to eq(0)
    end

    it "returns 2 when passed in [1,7,7,9]" do  
        output = continuous_numbers([1,7,7,9])
        expect(output).to eq(2)
    end

    it "returns 1 when passed in [1,2,3]" do  
        output = continuous_numbers([1,2,3])
        expect(output).to eq(1)
    end

    it "returns 1 when passed in [3]" do  
        output = continuous_numbers([3])
        expect(output).to eq(1)
    end

    it "returns 3 when passed in [1,7,7,2,9,9,9]" do  
        output = continuous_numbers([1,7,7,2,9,9,9])
        expect(output).to eq(3)
    end

    it "returns 2 when passed in [1,7,-7,-7,3]" do  
        output = continuous_numbers([1,7,-7,-7,3])
        expect(output).to eq(2)
    end

end