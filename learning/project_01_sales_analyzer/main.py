with open("data/sales.csv") as file :
  content = file.read()
  numbers = []
  for item in content.split("\n"):
   numbers.append(int(item))
print(numbers)    
total_sales = sum(numbers)
orders_sales = len(numbers)
average_sales = total_sales / orders_sales
highest = max(numbers)
lowest = min(numbers)

print("Total sales :",total_sales)
print("Orders:",orders_sales)
print("Average:",average_sales)
print("Highest:",highest)
print("Lowest:",lowest)