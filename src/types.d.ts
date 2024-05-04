import { Request, Response, NextFunction } from "express"

declare type EQM = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void | Promise<void>
