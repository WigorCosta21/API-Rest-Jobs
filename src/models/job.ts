import { sequelize } from '../database'
import { DataTypes, Model } from 'sequelize'

interface JobInstance extends Model {
    id: number
    title: string
    description: string
    limitDate: Date
    companyId: number
}
 
export const Job = sequelize.define<JobInstance>(
    'jobs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        limitDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        }
    }
)