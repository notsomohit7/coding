pairs = [("a", 1), ("b", 2), ("c", 3)]
my_dict = {}

for pair in pairs:
    for x in range(len(pair)):
        if x == 0:
            key = pair[x]
        else:
            value = pair[x]
    my_dict[key] = value
print(my_dict)