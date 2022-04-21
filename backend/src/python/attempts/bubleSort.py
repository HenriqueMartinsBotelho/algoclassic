import sys;

def bubleSort(arr):
  n = len(arr)
  for j in range(n-1):
    for i in range(n-1):
      if arr[i] > arr[i+1]:
        arr[i], arr[i+1] = arr[i+1], arr[i]
  return arr

if __name__ == "__main__":
  a = list(eval(sys.argv[1]))
  result = list(eval(sys.argv[2]))
  print(bubleSort(a) == result)