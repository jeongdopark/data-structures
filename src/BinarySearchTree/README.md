# Binary Search Tree

## 이진탐색트리

<div align="center">
<img width="400" alt="CleanShot 2024-05-27 at 18 51 32@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/fc002dc5-ebc6-4863-ba8b-651a710f9fb5">
</div>

- 각 노드가 최대 두 개의 자식을 가질 수 있는 트리
- `왼쪽 자식 노드는 부모 노드보다 작고`, `오른쪽 자식 노드는 부모 노드보다 큰 `값을 가지는 이진트리.

<br/>

## 노드 삽입

<div align="center">
<img width="400" alt="CleanShot 2024-05-27 at 19 05 09@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/1fa67a55-8ed9-4e20-ad45-05980914e3dc">
</div>

1. Root Node의 값과 비교하여 클 경우 오른쪽 노드로 이동, 작을 경우 왼쪽 노드로 이동
2. 서브 트리를 탐색하여 공간이 있으면 노드 삽입, 공간이 없을 경우 다시 탐색

ex ) `5의 값을 가진 노드를 삽입할 경우`

1. Root Node의 값과 삽입 노드 값 비교 ( 5 < 10. 왼쪽 서브트리 탐색)
2. 왼쪽 서브 트리 노드 값과 삽입 노드 값 비교 ( 5 < 6. 왼쪽 서브트리 탐색> )
3. 왼쪽 서브 트리 노드 값과 삽입 노드 값 비교 ( 5 > 4 )
4. 오른쪽 노드 빈 공간에 노드 삽입

</br>

## 노드 제거

제거는 세 가지 경우의 수를 고려해야합니다.

1. 제거할 노드의 자식 노드가 없는 경우

- 제거할 노드를 null로 변환.
<div align="center">
<img width="400" alt="CleanShot 2024-05-27 at 19 19 58@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/5b8f75c6-5d82-44e0-a2dd-88b80a06e980">
</div>

2. 제거할 노드의 왼쪽 또는 오른쪽 중에서 한쪽에만 자식이 있는 경우

- 제거할 노드의 자식 노드와 제거할 노드의 부모 노드를 연결.

<div align="center">
<img width="400" alt="CleanShot 2024-05-27 at 19 22 23@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/095633f8-5a14-4b81-9e7e-2342c632e482">
</div>

3. 왼쪽과 오른쪽 모두 자식이 있는 경우

두 가지 방법이 있습니다.

- 제거할 노드의 왼쪽 서브트리 중 가장 큰 노드와 제거할 노드를 스위칭 및 왼쪽 서브트리 중 최댓값 노드 제거

- 제거할 노드의 오른쪽 서브트리 중 최솟값 노드와 제거할 노드를 스위칭 및 오른쪽 서브트리 중 최솟값 노드 제거

<div align="center">
<img width="400" alt="CleanShot 2024-05-27 at 19 29 05@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/0a1d168a-e393-4c7c-980a-e18ca84c8da4">
</div>

</br>
</br>
