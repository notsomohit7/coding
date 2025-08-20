#two lists in a dictionary
keys = ["name", "age", "city"]
values = ["John", 25, "New York"]

my_dict = {}
for x in range(len(keys)):
    my_dict[keys[x]] = values[x]
print(my_dict)


#squarinf
nums = [1, 2, 3, 4]
squares = {}

for n in nums:
    squares[n] = n**2
print(squares)