/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express"

//for common middleware typing
declare type EQM = (
  request: Request<ParamsDictionary, unknown, unknown, { q?: string }>,
  response: Response,
  next: NextFunction,
) => Promise<Response<any, Record<string, any>> | undefined>
