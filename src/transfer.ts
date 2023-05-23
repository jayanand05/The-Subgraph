import {
  ChangeEvent as ChangeEventEvent,
  TransferEvent as TransferEventEvent
} from "../generated/Transfer/Transfer"
import { ChangeEvent, TransferEvent } from "../generated/schema"

export function handleChangeEvent(event: ChangeEventEvent): void {
  let entity = new ChangeEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferEvent(event: TransferEventEvent): void {
  let entity = new TransferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
