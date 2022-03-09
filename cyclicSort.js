// function cyclicSort(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   return nums;
// }

// console.log(cyclicSort([8, 3, 1, 5, 4, 2]));

function reverse(head) {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next; // temporarily store the next node (4 6 8 10)
    current.next = previous; // reverse the current node 2 -> null
    // before we move to the next node, point previous to the current node
    previous = current;
    current = next; // move on the next node
  }
  return previous;
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();
