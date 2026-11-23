type DriverRaceProjection = {
  Bonus?: (number | null) | undefined
  Created?: (string | null) | undefined
  CurrentPosition?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  DriverID?: number | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FastestLaps?: (number | null) | undefined
  FinalPosition?: (number | null) | undefined
  Laps?: (number | null) | undefined
  LapsLed?: (number | null) | undefined
  Manufacturer?: (string | null) | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  NumberDisplay?: (string | null) | undefined
  Penalty?: (number | null) | undefined
  Points?: (number | null) | undefined
  PoleFinalPosition?: (number | null) | undefined
  Poles?: (number | null) | undefined
  PositionDifferential?: (number | null) | undefined
  QualifyingSpeed?: (number | null) | undefined
  RaceID?: (number | null) | undefined
  Season?: number | undefined
  StartPosition?: (number | null) | undefined
  StatID?: number | undefined
  Updated?: (string | null) | undefined
  Wins?: (number | null) | undefined
}
type Driver = {
  BirthDate?: (string | null) | undefined
  BirthPlace?: (string | null) | undefined
  Chassis?: (string | null) | undefined
  Created?: (string | null) | undefined
  CrewChief?: (string | null) | undefined
  DriverID?: number | undefined
  Engine?: (string | null) | undefined
  FirstName?: (string | null) | undefined
  Gender?: (string | null) | undefined
  Height?: (number | null) | undefined
  LastName?: (string | null) | undefined
  Manufacturer?: (string | null) | undefined
  Number?: (number | null) | undefined
  NumberDisplay?: (string | null) | undefined
  PhotoUrl?: (string | null) | undefined
  Sponsors?: (string | null) | undefined
  Team?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Weight?: (number | null) | undefined
}
type DriverRace = {
  Bonus?: (number | null) | undefined
  Created?: (string | null) | undefined
  CurrentPosition?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  DriverID?: number | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FastestLaps?: (number | null) | undefined
  FinalPosition?: (number | null) | undefined
  Laps?: (number | null) | undefined
  LapsLed?: (number | null) | undefined
  Manufacturer?: (string | null) | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  NumberDisplay?: (string | null) | undefined
  Penalty?: (number | null) | undefined
  Points?: (number | null) | undefined
  PoleFinalPosition?: (number | null) | undefined
  Poles?: (number | null) | undefined
  PositionDifferential?: (number | null) | undefined
  QualifyingSpeed?: (number | null) | undefined
  RaceID?: (number | null) | undefined
  Season?: number | undefined
  StartPosition?: (number | null) | undefined
  StatID?: number | undefined
  Updated?: (string | null) | undefined
  Wins?: (number | null) | undefined
}
type Race = {
  ActualLaps?: (number | null) | undefined
  Broadcast?: (string | null) | undefined
  Canceled?: boolean | undefined
  Created?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  IsInProgress?: boolean | undefined
  IsOver?: boolean | undefined
  Name?: (string | null) | undefined
  PoleWinnerID?: (number | null) | undefined
  RaceID?: number | undefined
  RescheduledDateTime?: (string | null) | undefined
  RescheduledDay?: (string | null) | undefined
  ScheduledLaps?: (number | null) | undefined
  Season?: number | undefined
  SeriesID?: number | undefined
  SeriesName?: (string | null) | undefined
  Track?: (string | null) | undefined
  Updated?: (string | null) | undefined
  WinnerID?: (number | null) | undefined
}
type RaceResult = { DriverRaces?: DriverRace[] | undefined; Race?: Race | undefined }
type Series = { Name?: (string | null) | undefined; SeriesID?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/DriverRaceProjections/:raceid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; raceid: string } }
        output: DriverRaceProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/driver/:driverid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; driverid: string } }
        output: Driver
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/drivers': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Driver[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/raceresult/:raceid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; raceid: string } }
        output: RaceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/races/:season': {
      $get: {
        input: { param: { format: 'xml' | 'json'; season: string } }
        output: Race[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/series': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Series[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
