import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getGetFormatPlayByPlaySeasonWeekHometeamKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
  >,
) {
  return [':format', '/:format/PlayByPlay/:season/:week/:hometeam', args] as const
}

export function useGetFormatPlayByPlaySeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatPlayByPlaySeasonWeekHometeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayByPlay[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayByPlaySeasonWeekHometeam<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatPlayByPlaySeasonWeekHometeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayByPlay[':season'][':week'][':hometeam'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatPlayByPlayDeltaSeasonWeekMinutesKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/PlayByPlayDelta/:season/:week/:minutes', args] as const
}

export function useGetFormatPlayByPlayDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatPlayByPlayDeltaSeasonWeekMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayByPlayDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatPlayByPlayDeltaSeasonWeekMinutes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatPlayByPlayDeltaSeasonWeekMinutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].PlayByPlayDelta[':season'][':week'][':minutes'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFormatSimulatedPlayByPlayNumberofplaysKey(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
  >,
) {
  return [':format', '/:format/SimulatedPlayByPlay/:numberofplays', args] as const
}

export function useGetFormatSimulatedPlayByPlayNumberofplays<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatSimulatedPlayByPlayNumberofplaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].SimulatedPlayByPlay[':numberofplays'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormatSimulatedPlayByPlayNumberofplays<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFormatSimulatedPlayByPlayNumberofplaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':format'].SimulatedPlayByPlay[':numberofplays'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
