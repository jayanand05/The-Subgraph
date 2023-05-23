import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ChangeEvent, TransferEvent } from "../generated/Transfer/Transfer"

export function createChangeEventEvent(name: string): ChangeEvent {
  let changeEventEvent = changetype<ChangeEvent>(newMockEvent())

  changeEventEvent.parameters = new Array()

  changeEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeEventEvent
}

export function createTransferEventEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TransferEvent {
  let transferEventEvent = changetype<TransferEvent>(newMockEvent())

  transferEventEvent.parameters = new Array()

  transferEventEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEventEvent
}
