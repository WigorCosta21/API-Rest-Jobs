import { Request, Response } from "express"
import { Job } from './../models/job';

export const jobsController = {
    index: async (req: Request, res: Response) => {
        try {
            const jobs = await Job.findAll({ include: 'company' })
            return res.json(jobs)
        } catch(err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}