import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNumbersBase(
  args: InferRequestType<typeof client.numbers.base.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.base.$get(args, options))
}

export async function getNumbersBaseBinary(
  args: InferRequestType<typeof client.numbers.base.binary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.base.binary.$get(args, options))
}

export async function getNumbersBaseHex(
  args: InferRequestType<typeof client.numbers.base.hex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.base.hex.$get(args, options))
}

export async function getNumbersBaseOctal(
  args: InferRequestType<typeof client.numbers.base.octal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.base.octal.$get(args, options))
}

export async function getNumbersCardinal(
  args: InferRequestType<typeof client.numbers.cardinal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.cardinal.$get(args, options))
}

export async function getNumbersCurrency(
  args: InferRequestType<typeof client.numbers.currency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.currency.$get(args, options))
}

export async function getNumbersFact(
  args: InferRequestType<typeof client.numbers.fact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.fact.$get(args, options))
}

export async function getNumbersIsCube(
  args: InferRequestType<(typeof client.numbers)['is-cube']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers['is-cube'].$get(args, options))
}

export async function getNumbersIsPalindrome(
  args: InferRequestType<(typeof client.numbers)['is-palindrome']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers['is-palindrome'].$get(args, options))
}

export async function getNumbersIsSquare(
  args: InferRequestType<(typeof client.numbers)['is-square']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers['is-square'].$get(args, options))
}

export async function getNumbersIsTriangle(
  args: InferRequestType<(typeof client.numbers)['is-triangle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers['is-triangle'].$get(args, options))
}

export async function getNumbersNod(options?: ClientRequestOptions) {
  return await parseResponse(client.numbers.nod.$get(undefined, options))
}

export async function getNumbersNumeralChinese(
  args: InferRequestType<typeof client.numbers.numeral.chinese.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.numeral.chinese.$get(args, options))
}

export async function getNumbersNumeralEgyptian(
  args: InferRequestType<typeof client.numbers.numeral.egyptian.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.numeral.egyptian.$get(args, options))
}

export async function getNumbersNumeralRoman(
  args: InferRequestType<typeof client.numbers.numeral.roman.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.numeral.roman.$get(args, options))
}

export async function getNumbersOrdinal(
  args: InferRequestType<typeof client.numbers.ordinal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.ordinal.$get(args, options))
}

export async function getNumbersPi(
  args: InferRequestType<typeof client.numbers.pi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.pi.$get(args, options))
}

export async function getNumbersPrimeFactors(
  args: InferRequestType<typeof client.numbers.prime.factors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime.factors.$get(args, options))
}

export async function getNumbersPrimeIsFermatPrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-fermat-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-fermat-prime'].$get(args, options))
}

export async function getNumbersPrimeIsFibonacciPrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-fibonacci-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-fibonacci-prime'].$get(args, options))
}

export async function getNumbersPrimeIsMersennePrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-mersenne-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-mersenne-prime'].$get(args, options))
}

export async function getNumbersPrimeIsPartitionPrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-partition-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-partition-prime'].$get(args, options))
}

export async function getNumbersPrimeIsPellPrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-pell-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-pell-prime'].$get(args, options))
}

export async function getNumbersPrimeIsPerfect(
  args: InferRequestType<(typeof client.numbers.prime)['is-perfect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-perfect'].$get(args, options))
}

export async function getNumbersPrimeIsPrime(
  args: InferRequestType<(typeof client.numbers.prime)['is-prime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.prime['is-prime'].$get(args, options))
}

export async function getNumbersRandom(
  args: InferRequestType<typeof client.numbers.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.random.$get(args, options))
}
