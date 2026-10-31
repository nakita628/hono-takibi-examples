import { createRoute, z } from '@hono/zod-openapi'

const BaseLatSchema = z
  .number()
  .min(-90)
  .max(90)
  .openapi({ description: 'Base station latitude', example: 40.689249 })
  .openapi('BaseLat')

const BaseLngSchema = z
  .number()
  .min(-180)
  .max(180)
  .openapi({ description: 'Base station longitude', example: -74.0445 })
  .openapi('BaseLng')

const BsidSchema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'Base Station ID (CDMA BSID, BID)', example: 8584 })
  .openapi('Bsid')

const ChannelSchema = z
  .int()
  .min(0)
  .max(2047)
  .openapi({ description: 'CDMA channel frequency', example: 1 })
  .openapi('Channel')

const PnOffsetSchema = z
  .int()
  .min(0)
  .max(511)
  .openapi({
    description:
      'Pseudonoise offset. This field and CDMA channel frequency together allow for the locally unique identification of the cell.\n',
    example: 357,
  })
  .openapi('PnOffset')

const CdmaLocalIdSchema = z
  .strictObject({ channel: ChannelSchema, pnOffset: PnOffsetSchema })
  .openapi({
    description: 'Local identification parameters of CDMA serving cell',
    example: { channel: 0, pnOffset: 247 },
    required: ['pnOffset', 'channel'],
  })
  .openapi('CdmaLocalId')

const NidSchema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'Network ID (NID)', example: 10 })
  .openapi('Nid')

const PilotPowerSchema = z
  .int()
  .min(-142)
  .max(-49)
  .openapi({
    description:
      'Pilot Power (dBm). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.\n',
    example: -99,
  })
  .openapi('PilotPower')

const CdmaNmrSchema = z
  .strictObject({
    bsid: BsidSchema.exactOptional(),
    channel: ChannelSchema,
    pilotPower: PilotPowerSchema.exactOptional(),
    pnOffset: PnOffsetSchema,
  })
  .openapi({
    description: 'CDMA Network measurement',
    example: { channel: 0, pnOffset: 357 },
    required: ['pnOffset', 'channel'],
  })
  .openapi('CdmaNmr')

const CdmaNmrArraySchema = z
  .array(CdmaNmrSchema)
  .min(1)
  .max(32)
  .openapi({
    description: 'CDMA Network measurements',
    example: [
      { channel: 0, pnOffset: 357 },
      { channel: 0, pnOffset: 366 },
    ],
  })
  .openapi('CdmaNmrArray')

const RegistrationZoneSchema = z
  .int()
  .min(0)
  .max(4095)
  .openapi({ description: 'CDMA Registration Zone (RZ)', example: 1234 })
  .openapi('RegistrationZone')

const SidSchema = z
  .int()
  .min(1)
  .max(32767)
  .openapi({ description: 'System ID (SID)', example: 4162 })
  .openapi('Sid')

const CdmaSchema = z
  .strictObject({
    baseLat: BaseLatSchema.exactOptional(),
    baseLng: BaseLngSchema.exactOptional(),
    bsid: BsidSchema,
    localId: CdmaLocalIdSchema.exactOptional(),
    nid: NidSchema,
    nmr: CdmaNmrArraySchema.exactOptional(),
    pilotPower: PilotPowerSchema.exactOptional(),
    rz: RegistrationZoneSchema.exactOptional(),
    sid: SidSchema,
  })
  .openapi({
    description: 'CDMA measurement',
    example: {
      bsid: 8583,
      localId: { channel: 0, pnOffset: 247 },
      nid: 10,
      nmr: [
        { channel: 0, pnOffset: 357 },
        { channel: 0, pnOffset: 366 },
      ],
      sid: 4162,
    },
    required: ['sid', 'nid', 'bsid'],
  })
  .openapi('Cdma')

const ClientInfoSchema = z
  .strictObject({
    firmware: z
      .string()
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({ description: 'Device firmware version information', example: 'G506FXX453J1' }),
    manufacturer: z
      .string()
      .min(2)
      .max(50)
      .openapi({ description: 'Manufacturer of the device (hardware)', example: 'Lemon' }),
    model: z
      .string()
      .min(1)
      .max(50)
      .openapi({ description: 'Model of the device (hardware)', example: 'Flagship X1' }),
    name: z
      .string()
      .min(3)
      .max(50)
      .openapi({
        description: 'Name of the client software accessing the HERE API',
        example: 'FinderApp',
      }),
    platform: z
      .string()
      .min(3)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Software platform information of the device, for example operating system name and version.',
        example: 'Android 7.0',
      }),
    version: z
      .string()
      .min(3)
      .max(13)
      .openapi({
        description:
          'Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.',
        example: '2.0.31',
      }),
  })
  .openapi({
    description: 'Information about the client',
    example: { manufacturer: 'Lemon', model: 'Flagship X1', name: 'FinderApp', version: '2.0.31' },
    required: ['manufacturer', 'model', 'name', 'version'],
  })
  .openapi('ClientInfo')

const GeranCidSchema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'Cell identifier (GERAN CID)', example: 16503 })
  .openapi('GeranCid')

const LacSchema = z
  .int()
  .min(1)
  .max(65535)
  .refine(
    (val) =>
      !z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'number') {
            if (val < 65534) {
              ctx.addIssue({ code: 'custom' })
            }
            if (val > 65534) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .safeParse(val).success,
  )
  .openapi({
    description: 'Location Area Code (LAC). Note, value 65534 is invalid.',
    example: 5126,
  })
  .openapi('Lac')

const BcchSchema = z
  .int()
  .min(0)
  .max(1023)
  .openapi({
    description:
      'Broadcast Control Channel (BCCH, synonymous to ARFCN = Absolute Radio Frequency Channel)',
    example: 82,
  })
  .openapi('Bcch')

const BsicSchema = z
  .int()
  .min(0)
  .max(63)
  .openapi({
    description: 'Base Station Identity Code (BSIC, for instance, color code)',
    example: 6,
  })
  .openapi('Bsic')

const GsmLocalIdSchema = z
  .strictObject({ bcch: BcchSchema, bsic: BsicSchema })
  .openapi({
    description: 'Local identification parameters of GSM serving cell',
    example: { bcch: 80, bsic: 5 },
    required: ['bsic', 'bcch'],
  })
  .openapi('GsmLocalId')

const MccSchema = z
  .int()
  .min(200)
  .max(999)
  .refine(
    (val) =>
      !z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'number') {
            if (val < 800) {
              ctx.addIssue({ code: 'custom' })
            }
            if (val > 899) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .safeParse(val).success,
  )
  .openapi({
    description:
      'Mobile Country Code (MCC). Note: 0xx is for test networks, 1xx and 8xx are not used\n',
    example: 262,
  })
  .openapi('Mcc')

const MncSchema = z
  .int()
  .min(0)
  .max(999)
  .openapi({ description: 'Mobile Network Code (MNC).', example: 2 })
  .openapi('Mnc')

const GsmNmrGlobalIdSchema = z
  .strictObject({ cid: GeranCidSchema, lac: LacSchema })
  .openapi({
    description:
      'The `lac` and `cid` parameters of global ID for GSM neighbor measurement. They should be from the same PLMN (MCC+MNC) as the serving cell.\n',
    required: ['lac', 'cid'],
  })
  .openapi('GsmNmrGlobalId')

const RxLevelSchema = z
  .int()
  .min(-110)
  .max(-25)
  .openapi({
    description:
      'Received Signal power (dBm). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.\n',
    example: -77,
  })
  .openapi('RxLevel')

const GsmNmrSchema = z
  .strictObject({
    bcch: BcchSchema,
    bsic: BsicSchema,
    globalIdentity: GsmNmrGlobalIdSchema.exactOptional(),
    rxLevel: RxLevelSchema.exactOptional(),
  })
  .openapi({
    description: 'GSM Network measurements.\n',
    example: { bcch: 82, bsic: 6 },
    required: ['bsic', 'bcch'],
  })
  .openapi('GsmNmr')

const GsmNmrArraySchema = z
  .array(GsmNmrSchema)
  .min(1)
  .max(32)
  .openapi({ description: 'GSM Network measurements', example: [{ bcch: 82, bsic: 6 }] })
  .openapi('GsmNmrArray')

const GsmTimingAdvanceSchema = z
  .int()
  .min(0)
  .max(63)
  .openapi({
    description:
      'Timing advance (TA). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.',
    example: 3,
  })
  .openapi('GsmTimingAdvance')

const GsmSchema = z
  .strictObject({
    cid: GeranCidSchema,
    lac: LacSchema,
    localId: GsmLocalIdSchema.exactOptional(),
    mcc: MccSchema,
    mnc: MncSchema,
    nmr: GsmNmrArraySchema.exactOptional(),
    rxLevel: RxLevelSchema.exactOptional(),
    ta: GsmTimingAdvanceSchema.exactOptional(),
  })
  .openapi({
    description: 'GSM measurement',
    example: {
      cid: 16504,
      lac: 5126,
      localId: { bcch: 80, bsic: 5 },
      mcc: 262,
      mnc: 1,
      nmr: [
        { bcch: 82, bsic: 6 },
        { bcch: 85, bsic: 7 },
        { bcch: 93, bsic: 12 },
        { bcch: 88, bsic: 13 },
        { bcch: 88, bsic: 19 },
      ],
    },
    required: ['mcc', 'mnc', 'lac', 'cid'],
  })
  .openapi('Gsm')

const EutranCidSchema = z
  .int()
  .min(0)
  .max(268435455)
  .openapi({
    description:
      'E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID). MCC + MNC + CID uniquely identifies the LTE cell, TAC is optional.\n',
    example: 2898945,
  })
  .openapi('EutranCid')

const EarfcnSchema = z
  .int()
  .min(0)
  .max(262143)
  .openapi({ description: 'Evolved Absolute Radio Frequency Channel (E-ARFCN)', example: 6300 })
  .openapi('Earfcn')

const PciSchema = z
  .int()
  .min(0)
  .max(503)
  .openapi({ description: 'Physical Cell Identity (PCI)', example: 237 })
  .openapi('Pci')

const LteLocalIdSchema = z
  .strictObject({ earfcn: EarfcnSchema, pci: PciSchema })
  .openapi({
    description: 'Local identification parameters of LTE serving cell',
    example: { earfcn: 6300, pci: 123 },
    required: ['pci', 'earfcn'],
  })
  .openapi('LteLocalId')

const RsrpSchema = z
  .int()
  .min(-140)
  .max(-44)
  .openapi({
    description:
      'Reference Signal Received Power (RSRP) in dBm. Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.\n',
    example: -95,
  })
  .openapi('Rsrp')

const RsrqSchema = z
  .number()
  .min(-19.5)
  .max(-3)
  .openapi({
    description:
      'Reference Signal Received Quality (RSRQ) in dBm. Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.\n',
    example: -12,
  })
  .openapi('Rsrq')

const LteNmrSchema = z
  .strictObject({
    cid: EutranCidSchema.exactOptional(),
    earfcn: EarfcnSchema,
    pci: PciSchema,
    rsrp: RsrpSchema.exactOptional(),
    rsrq: RsrqSchema.exactOptional(),
  })
  .openapi({
    description: 'LTE Network measurement',
    example: { earfcn: 6300, pci: 237, rsrp: -95, rsrq: -12 },
    required: ['pci', 'earfcn'],
  })
  .openapi('LteNmr')

const LteNmrArraySchema = z
  .array(LteNmrSchema)
  .min(1)
  .max(32)
  .openapi({
    description: 'LTE Network measurements',
    example: [
      { earfcn: 6300, pci: 237 },
      { earfcn: 6300, pci: 442 },
    ],
  })
  .openapi('LteNmrArray')

const LteTimingAdvanceSchema = z
  .int()
  .min(0)
  .max(1282)
  .openapi({
    description:
      'Timing Advance. Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see 3GPP TS 36.213 and 36.211.\n',
    example: 40,
  })
  .openapi('LteTimingAdvance')

const TacSchema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'Tracking Area Code (TAC)', example: 1 })
  .openapi('Tac')

const LteSchema = z
  .strictObject({
    cid: EutranCidSchema,
    localId: LteLocalIdSchema.exactOptional(),
    mcc: MccSchema,
    mnc: MncSchema,
    nmr: LteNmrArraySchema.exactOptional(),
    rsrp: RsrpSchema.exactOptional(),
    rsrq: RsrqSchema.exactOptional(),
    ta: LteTimingAdvanceSchema.exactOptional(),
    tac: TacSchema.exactOptional(),
  })
  .openapi({
    description: 'LTE measurement',
    example: {
      cid: 2898945,
      localId: { earfcn: 6300, pci: 123 },
      mcc: 262,
      mnc: 2,
      nmr: [
        { earfcn: 6300, pci: 237 },
        { earfcn: 6300, pci: 442 },
      ],
    },
    required: ['mcc', 'mnc', 'cid'],
  })
  .openapi('Lte')

const UtranCidSchema = z
  .int()
  .min(0)
  .max(268435455)
  .openapi({
    description:
      'UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID). MCC + MNC + CID uniquely identifies the WCDMA cell, LAC is optional.\n',
    example: 14674663,
  })
  .openapi('UtranCid')

const CellParamsSchema = z
  .int()
  .min(0)
  .max(127)
  .openapi({ description: 'Cell Parameters ID (CDMA Spreading Code ID)', example: 86 })
  .openapi('CellParams')

const UarfcnSchema = z
  .int()
  .min(0)
  .max(16383)
  .openapi({ description: 'UTRAN Absolute Radio Frequency (U-ARFCN)', example: 10100 })
  .openapi('Uarfcn')

const TdscdmaLocalIdSchema = z
  .strictObject({ cellParams: CellParamsSchema, uarfcn: UarfcnSchema })
  .openapi({
    description: 'Local identification parameters of TD-SCDMA serving cell',
    example: { cellParams: 56, uarfcn: 10101 },
    required: ['uarfcn', 'cellParams'],
  })
  .openapi('TdscdmaLocalId')

const PathlossSchema = z
  .int()
  .min(46)
  .max(158)
  .openapi({ description: 'UTRAN pathloss (dBm)', example: 80 })
  .openapi('Pathloss')

const RscpSchema = z
  .int()
  .min(-120)
  .max(-25)
  .openapi({
    description:
      'Received Signal Code Power (RSCP) in dBm. Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.\n',
    example: -50,
  })
  .openapi('Rscp')

const TdscdmaNmrSchema = z
  .strictObject({
    cellParams: CellParamsSchema,
    cid: UtranCidSchema.exactOptional(),
    pathloss: PathlossSchema.exactOptional(),
    rscp: RscpSchema.exactOptional(),
    uarfcn: UarfcnSchema,
  })
  .openapi({
    description: 'TD-SCDMA Network measurement',
    example: { cellParams: 86, pathloss: 80, rcsp: -50, uarfcn: 10100 },
    required: ['uarfcn', 'cellParams'],
  })
  .openapi('TdscdmaNmr')

const TdscdmaNmrArraySchema = z
  .array(TdscdmaNmrSchema)
  .min(1)
  .max(32)
  .openapi({
    description: 'TD-SCDMA Network measurements. Maximum of 8 distinct uarfcn frequencies.',
    example: [
      { cellParams: 86, uarfcn: 10100 },
      { cellParams: 14, uarfcn: 10121 },
    ],
  })
  .openapi('TdscdmaNmrArray')

const TdscdmaTimingAdvanceSchema = z
  .int()
  .min(0)
  .max(1530)
  .openapi({
    description:
      'Timing advance (TA). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.\n',
    example: 20,
  })
  .openapi('TdscdmaTimingAdvance')

const TdscdmaSchema = z
  .strictObject({
    cid: UtranCidSchema,
    lac: LacSchema.exactOptional(),
    localId: TdscdmaLocalIdSchema.exactOptional(),
    mcc: MccSchema,
    mnc: MncSchema,
    nmr: TdscdmaNmrArraySchema.exactOptional(),
    pathloss: PathlossSchema.exactOptional(),
    rscp: RscpSchema.exactOptional(),
    ta: TdscdmaTimingAdvanceSchema.exactOptional(),
  })
  .openapi({
    description: 'TD-SCDMA measurement.',
    example: {
      cid: 18563770,
      localId: { cellParams: 56, uarfcn: 10101 },
      mcc: 460,
      mnc: 0,
      nmr: [
        { cellParams: 86, uarfcn: 10100 },
        { cellParams: 14, uarfcn: 10121 },
      ],
    },
    required: ['mcc', 'mnc', 'cid'],
  })
  .openapi('Tdscdma')

const PscSchema = z
  .int()
  .min(0)
  .max(511)
  .openapi({
    description: 'Primary Scrambling Code (PSC, Primary CPICH, Primary Control Pilot Channel).',
    example: 149,
  })
  .openapi('Psc')

const UarfcndlSchema = z
  .int()
  .min(0)
  .max(16383)
  .openapi({ description: 'UTRAN Absolute Radio Frequency Downlink (UARFCN-DL)', example: 10786 })
  .openapi('Uarfcndl')

const WcdmaLocalIdSchema = z
  .strictObject({ psc: PscSchema, uarfcndl: UarfcndlSchema })
  .openapi({
    description: 'Local identification parameters of WCDMA serving cell',
    example: { psc: 140, uarfcndl: 10780 },
    required: ['uarfcndl', 'psc'],
  })
  .openapi('WcdmaLocalId')

const WcdmaNmrSchema = z
  .strictObject({
    cid: UtranCidSchema.exactOptional(),
    pathloss: PathlossSchema.exactOptional(),
    psc: PscSchema,
    rscp: RscpSchema.exactOptional(),
    uarfcndl: UarfcndlSchema,
  })
  .openapi({
    description: 'WCDMA Network measurement',
    example: { pathloss: 80, psc: 149, rcsp: -50, uarfcndl: 10786 },
    required: ['uarfcndl', 'psc'],
  })
  .openapi('WcdmaNmr')

const WcdmaNmrArraySchema = z
  .array(WcdmaNmrSchema)
  .min(1)
  .max(32)
  .openapi({
    description: 'WCDMA Network measurements. Maximum of 8 distinct uarfcndl frequencies.',
    example: [
      { psc: 149, uarfcndl: 10786 },
      { psc: 211, uarfcndl: 10762 },
    ],
  })
  .openapi('WcdmaNmrArray')

const WcdmaSchema = z
  .strictObject({
    cid: UtranCidSchema,
    lac: LacSchema.exactOptional(),
    localId: WcdmaLocalIdSchema.exactOptional(),
    mcc: MccSchema,
    mnc: MncSchema,
    nmr: WcdmaNmrArraySchema.exactOptional(),
    pathloss: PathlossSchema.exactOptional(),
    rscp: RscpSchema.exactOptional(),
  })
  .openapi({
    description: 'WCDMA measurement',
    example: {
      cid: 14674663,
      localId: { psc: 140, uarfcndl: 10780 },
      mcc: 262,
      mnc: 7,
      nmr: [
        { psc: 149, uarfcndl: 10786 },
        { psc: 211, uarfcndl: 10762 },
      ],
    },
    required: ['mcc', 'mnc', 'cid'],
  })
  .openapi('Wcdma')

const RssSchema = z
  .int()
  .min(-128)
  .max(0)
  .openapi({ description: 'Received signal level (dBm) at the terminal', example: -76 })
  .openapi('Rss')

const WlanLocateSchema = z
  .strictObject({
    mac: z
      .string()
      .regex(/^((([0-9a-fA-F]{2}:){5})|(([0-9a-fA-F]{2}-){5}))[0-9a-fA-F]{2}$/)
      .openapi({
        description:
          'The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning.\n',
        example: 'A0-E4-53-20-66-AD',
      }),
    rss: RssSchema.exactOptional(),
  })
  .openapi({
    description: 'WLAN measurement',
    example: { mac: '8C-1A-BF-20-66-AD' },
    required: ['mac'],
  })
  .openapi('WlanLocate')

type LocateType = {
  cdma?: z.infer<typeof CdmaSchema>[]
  client?: z.infer<typeof ClientInfoSchema>
  gsm?: z.infer<typeof GsmSchema>[]
  lte?: z.infer<typeof LteSchema>[]
  tdscdma?: z.infer<typeof TdscdmaSchema>[]
  wcdma?: z.infer<typeof WcdmaSchema>[]
  wlan?: z.infer<typeof WlanLocateSchema>[]
}

const ApiHealthStatusSchema = z
  .object({
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Health status of API', example: 'OK' }),
  })
  .openapi({ required: [] })
  .openapi('ApiHealthStatus')

const ApiVersionSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of API', example: '2.0.3' }),
    serviceVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the Service', example: '2.0.20' }),
  })
  .openapi({ required: [] })
  .openapi('ApiVersion')

const AuthErrorSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'Error message' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed information about the error' }),
  })
  .openapi({
    description: 'Error object reported in case of authentication or authorization errors.',
    example: { error: 'Unauthorized', error_description: 'ApiKey invalid. ApiKey not found.' },
    required: [],
  })
  .openapi('AuthError')

const ErrorDetailSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Localize message', example: 'Size must be between 3 and 64' }),
    messagePlaceholders: z.any().exactOptional(),
    messageTemplate: z
      .string()
      .exactOptional()
      .openapi({ example: 'validation.constraint.between' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Source of the error, using JSONPath',
        example: '$.data.attributes[0].size',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the detail', example: 'Invalid size value' }),
  })
  .openapi({ description: 'Detail about an error', required: [] })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    action: z.string().openapi({ description: 'Actionable instructions for the user' }),
    cause: z
      .string()
      .openapi({
        description: 'Reason for the error',
        example: 'The input data in question does not meet validation rules',
      }),
    code: z.string().openapi({ description: 'Error code', example: 'E606101' }),
    correlationId: z
      .uuid()
      .openapi({
        description: 'Copy from X-Correlation-ID header for logging',
        example: '4199533b-6290-41db-8d79-edf4f4019a74',
      }),
    details: z.array(ErrorDetailSchema).exactOptional(),
    status: z.number().openapi({ description: 'Equals HTTP status code', example: 400 }),
    title: z
      .string()
      .openapi({ description: 'Localized error string', example: 'Input data failed validation' }),
  })
  .openapi({
    description: 'Object wrapper for the error response to a request.',
    example: {
      action: 'Actionable instructions for the user',
      cause: 'The input data in question does not meet validation rules',
      code: 'E606101',
      correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
      details: [
        {
          message: 'Size must be between 3 and 64',
          messagePlaceholders: { field: 'size', max: 64, min: 3 },
          messageTemplate: 'validation.constraint.between',
          source: '$.data.attributes[0].size',
          title: 'Invalid size value',
        },
      ],
      status: 400,
      title: 'Input data failed validation',
    },
    required: ['title', 'status', 'code', 'cause', 'action', 'correlationId'],
  })
  .openapi('Error')

const EutranCidNmrSchema = z
  .int()
  .min(0)
  .max(268435455)
  .openapi({
    description: 'E-UTRA Cell Identifier (UC-Id), 28 bits (20 bits eNodeB and 8 bits Cell ID).',
    example: 2898945,
  })
  .openapi('EutranCidNmr')

const LatitudeSchema = z
  .number()
  .min(-90)
  .max(90)
  .openapi({
    description: 'Latitude in WGS-84 format, decimal representation ranging from -90 to 90.',
    example: 61.4706194,
  })
  .openapi('Latitude')

const LocateSchema: z.ZodType<LocateType> = z
  .lazy(() =>
    z
      .strictObject({
        cdma: z
          .array(CdmaSchema)
          .min(1)
          .max(16)
          .exactOptional()
          .openapi({ description: 'CDMA cells (CDMA2000)' }),
        client: ClientInfoSchema.exactOptional(),
        gsm: z
          .array(GsmSchema)
          .min(1)
          .max(16)
          .exactOptional()
          .openapi({ description: 'GSM cells (GERAN)' }),
        lte: z
          .array(LteSchema)
          .min(1)
          .max(16)
          .exactOptional()
          .openapi({ description: 'LTE cells (E-UTRA, 4G)' }),
        tdscdma: z
          .array(TdscdmaSchema)
          .min(1)
          .max(16)
          .exactOptional()
          .openapi({ description: 'TD-SCDMA cells (UTRA-TDD, 3G UMTS TDD)' }),
        wcdma: z
          .array(WcdmaSchema)
          .min(1)
          .max(16)
          .exactOptional()
          .openapi({ description: 'WCDMA cells (UTRA-FDD, 3G UMTS)' }),
        wlan: z
          .array(WlanLocateSchema)
          .min(1)
          .max(256)
          .exactOptional()
          .openapi({
            description:
              'WLAN access positions. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell. Alternatively, you can allow fallbacks to less accurate single WLAN AP location estimates by using the setting `fallback=singleWifi`.\n',
          }),
      })
      .openapi({
        description:
          'Object wrapping the location data submitted in a request for a position. At least one of `gsm`, `wcdma`, `tdscdma`, `lte`, `cdma`, or `wlan` elements is required. Array elements should be unique within the request.\n',
        example: {
          client: {
            manufacturer: 'Lemon',
            model: 'Flagship X1',
            name: 'FinderApp',
            version: '2.0.31',
          },
          lte: [{ cid: 2898945, mcc: 262, mnc: 2 }],
          wlan: [{ mac: 'F4-55-95-11-2C-C1' }],
        },
        'x-anyRequired': ['gsm', 'wcdma', 'tdscdma', 'lte', 'cdma', 'wlan'],
        required: [],
      }),
  )
  .openapi('Locate')

const LongitudeSchema = z
  .number()
  .min(-180)
  .max(180)
  .openapi({
    description: 'Longitude in WGS-84 format, decimal representation ranging from -180 to 180.',
    example: 23.72265816,
  })
  .openapi('Longitude')

const PositionLocateSchema = z
  .object({
    accuracy: z
      .number()
      .min(1)
      .openapi({
        description:
          'Uncertainty circle radius in meters (degree of confidence according to the `confidence` parameter).',
        example: 829,
      }),
    alt: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.',
        example: 142,
      }),
    altAccuracy: z
      .number()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Uncertainty of the altitude estimate in meters (degree of confidence according to the `confidence` parameter). This field superceeds old `altaccuracy`.\n',
        example: 20,
      }),
    lat: LatitudeSchema,
    lng: LongitudeSchema,
  })
  .openapi({
    description: 'Object containing information on a location where a measurement was taken.',
    example: { accuracy: 829, alt: 142, altAccuracy: 20, lat: 61.4706194, lng: 23.72265816 },
    required: ['lat', 'lng', 'accuracy'],
    'x-dependencies': { alt: ['altAccuracy'], altAccuracy: ['alt'] },
  })
  .openapi('PositionLocate')

const UtranCidNmrSchema = z
  .int()
  .min(0)
  .max(268435455)
  .openapi({
    description: 'UTRAN Cell Identifier (UC-Id), 28 bits (12 bits RNC and 16 bits Cell ID).',
    example: 14674662,
  })
  .openapi('UtranCidNmr')

const CorrelationIDHeaderSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    description: 'Correlation ID of current request within HERE services.',
    param: { required: false },
  })

const RequestIDHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Value of X-Request-ID header parameter supplied in the request.',
    param: { required: false },
  })

const Error400Response = {
  description:
    'The request is malformed. The URL query parameters or the JSON POST body in the request is invalid. Check the message in the response for additional troubleshooting information.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action: 'Please correct the request and retry',
        cause: 'Validation error in body',
        code: 'E606400',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 400,
        title: 'Bad Request',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error401Response = {
  description: 'Authentication failed.',
  content: {
    'application/json': {
      schema: AuthErrorSchema,
      example: {
        error: 'Unauthorized',
        error_description: 'Token Validation Failure - invalid time in token',
      },
    },
  },
}

const Error403Response = {
  description: 'Access denied.',
  content: {
    'application/json': {
      schema: AuthErrorSchema,
      example: {
        error: 'Forbidden',
        error_description:
          'These credentials do not authorize access. Please contact your customer representative or submit a request here https://developer.here.com/contact-us to upgrade your account. You can also get valid credentials by registering for a free trial license on https://developer.here.com.\n',
      },
    },
  },
}

const Error405Response = {
  description: 'Method not allowed. Only POST is supported.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action: 'Send request using HTTP POST method',
        cause: 'Only HTTP POST method supported',
        code: 'E606405',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 405,
        title: 'Not supported',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error413Response = {
  description: 'Too large request.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action:
          'Check the request correctness and/or remove some measurements to reduce request size',
        cause: 'The request body exceeds the maximum size limit',
        code: 'E606413',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 413,
        title: 'Payload Too Large',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error414Response = {
  description: 'Too long URI.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action: 'Fix the URI (remove extra parameters?)',
        cause: 'URI Too Long',
        code: 'E606414',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 414,
        title: 'URI Too Long',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error415Response = {
  description: 'Invalid request content type.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action:
          'Provide request body in application/json content type and/or correct Content-Type header',
        cause: 'Content-Type should be application/json.',
        code: 'E606415',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 415,
        title: 'Unsupported Media Type',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error500Response = {
  description: 'An unexpected server error has occurred, try again later.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action:
          'System administrators have been notified about the problem. Please try again later.',
        cause: 'Something unexpected happened.',
        code: 'E606500',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 500,
        title: 'Internal Server Error',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const Error503Response = {
  description: 'Service is unavailable, try again later.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        action: 'Please try again later',
        cause: 'The service is currently unavailable',
        code: 'E606503',
        correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
        status: 503,
        title: 'Service Unavailable',
      },
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const SuccessLocateResponse = {
  description:
    'Request processed successfully and a WGS-84 compliant geocoordinate location estimate was included in the response.',
  content: {
    'application/json': {
      schema: z
        .object({ location: PositionLocateSchema })
        .openapi({
          description: 'Object wrapper for the response to a location request.',
          required: ['location'],
        }),
    },
  },
  headers: z.object({
    'X-Correlation-ID': CorrelationIDHeaderSchema,
    'X-Request-ID': RequestIDHeaderSchema,
  }),
}

const ConfidenceParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(50).max(99),
  )
  .default(68)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Confidence level in percent for the accuracy/uncertainty in the location estimate response. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the location estimate: the higher the number, the greater the confidence level).\n',
      in: 'query',
      name: 'confidence',
      required: false,
      schema: { default: 68, maximum: 99, minimum: 50, type: 'integer' },
    },
  })

const ContentEncodingParamsSchema = z
  .literal('gzip')
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates that the data in the body is gzip-encoded.',
      in: 'header',
      name: 'Content-Encoding',
      required: false,
      schema: { enum: ['gzip'], type: 'string' },
    },
  })

const CorrelationIDParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      description:
        'ID used for correlating Positioning Service requests within other HERE Services. Used for logging and error reporting. Must be a valid UUID. For internal usage by HERE services. It will be echoed in the response.\n',
      in: 'header',
      name: 'X-Correlation-ID',
      required: false,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const DesiredParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.literal('altitude')),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma-separated list of additional data fields that the service should include in the response if data is available. The query parameter supports the value `altitude`.\n',
      explode: false,
      in: 'query',
      name: 'desired',
      required: false,
      schema: { items: { enum: ['altitude'], type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const FallbackParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['any', 'area', 'singleWifi'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Acceptable fallback options for cell and WLAN positioning. Values `area` and `any` apply to cell based positioning, and value `singleWifi` applies to WLAN based positioning. Both cell and WLAN options may be specified in the same request. If both `area` and `any` are specified, then `area` is ignored.\n\nBy default, cell based positioning returns cell tower level location estimates only. If you allow a WGS-84 compliant geocoordinate location estimate based on LAC, RNC, TAC, NID, or RZ areas, use the `fallback=area` setting. If you use the `fallback=any` setting, the service uses all available cell fallback methods and therefore the location estimate in the response may be at the MNC, SID, or MCC level.\n\nFor privacy reasons, the precise positioning based on a single WLAN AP is not possible. You can use the `fallback=singleWifi` setting to allow less accurate positioning based on a single WLAN AP. In that case, the center location of the position estimate will be deviated and the reported accuracy radius will be larger.\n',
      explode: false,
      in: 'query',
      name: 'fallback',
      required: false,
      schema: { items: { enum: ['any', 'area', 'singleWifi'], type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const RequestIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'ID used for correlating customer requests within HERE services. Used for logging and error reporting. Can be any string, but UUID is recommended. It will be echoed in the response.\n',
      in: 'header',
      name: 'X-Request-ID',
      required: false,
      schema: { type: 'string' },
    },
  })

const RequiredParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.literal('altitude')),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma-separated list of additional data fields that the service should include in the response. If the data is not available, the response contains an error message. The query parameter supports the value `altitude`.\n',
      explode: false,
      in: 'query',
      name: 'required',
      required: false,
      schema: { items: { enum: ['altitude'], type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const APIKeySecurityScheme = {
  description:
    'A 43-byte Base64 URL-safe encoded string used for the authentication of the client application. As a logged in user, you can generate it at your [Projects](https://developer.here.com/projects). API Keys never expire but you can invalidate your API Keys at any time. You cannot have more than two API Keys for one app at the same time. You must include API key with every request, unless bearer token is provided.\n\nSee the [Identity & Access Management Developer Guide](https://developer.here.com/documentation/identity-access-management/dev_guide/index.html) for more details.\n',
  in: 'query',
  name: 'apiKey',
  type: 'apiKey',
}

const AccessTokenSecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'HERE Account bearer token. Required unless API Key provided in the query string parameters.\nSee the [Identity & Access Management Developer Guide](https://developer.here.com/documentation/identity-access-management/dev_guide/index.html) for more details.\n',
  scheme: 'bearer',
  type: 'http',
}

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['API Information'],
  summary: 'Service health',
  description: 'Tests basic health of the service',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'Health status',
      content: { 'application/json': { schema: ApiHealthStatusSchema } },
    },
  },
})

export const postLocateRoute = createRoute({
  method: 'post',
  path: '/locate',
  tags: ['Location'],
  summary: 'Location query',
  description:
    'Request WGS-84 compliant geocoordinates for a location based on 2G/3G/4G cell and/or WLAN measurements.',
  operationId: 'postLocate',
  request: {
    query: z.object({
      confidence: ConfidenceParamsSchema,
      fallback: FallbackParamsSchema,
      desired: DesiredParamsSchema,
      required: RequiredParamsSchema,
    }),
    headers: z.object({
      'Content-Encoding': ContentEncodingParamsSchema,
      'X-Request-ID': RequestIDParamsSchema,
    }),
    body: {
      description:
        'Request body containing cell and/or WLAN measurement data. Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.\n',
      content: { 'application/json': { schema: LocateSchema } },
      required: true,
    },
  },
  responses: {
    200: SuccessLocateResponse,
    400: Error400Response,
    401: Error401Response,
    403: Error403Response,
    404: {
      description:
        'The values provided in the request cannot produce any content for the response. The location of the WLANs and cells in the request is unknown or the locations of the radio measurements are so widely scattered that the location cannot be determined. Make sure that the network measurements are correct and consistent. Try allowing fallbacks `area` or `any` for cell positioning and `singleWifi` for WLAN positioning.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            action: 'Try with new measurements',
            cause: 'Position cannot be found for given measurements',
            code: 'E606404',
            correlationId: '4199533b-6290-41db-8d79-edf4f4019a74',
            status: 404,
            title: 'Position not found',
          },
        },
      },
      headers: z.object({
        'X-Correlation-ID': CorrelationIDHeaderSchema,
        'X-Request-ID': RequestIDHeaderSchema,
      }),
    },
    405: Error405Response,
    413: Error413Response,
    414: Error414Response,
    415: Error415Response,
    500: Error500Response,
    503: Error503Response,
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['API Information'],
  summary: 'API version',
  description: 'Retrieves API Specification version information',
  operationId: 'getApiVersion',
  responses: {
    200: {
      description: 'Version of API',
      content: { 'application/json': { schema: ApiVersionSchema } },
    },
  },
})
