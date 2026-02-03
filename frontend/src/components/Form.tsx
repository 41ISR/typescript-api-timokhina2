import type { ChangeEvent, FormEvent } from "react"
import type { ICreateUserRequest } from "../types"

interface IFormProps{
    formData: ICreateUserRequest,
    handleInputChange:  (e: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit:  (e: FormEvent) => void
}

export const Form = ({formData, handleInputChange, handleSubmit}:IFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    name="name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    name="email"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Create User
            </button>
        </form>
    )
}