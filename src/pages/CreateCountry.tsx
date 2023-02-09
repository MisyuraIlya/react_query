import React, { FormEventHandler, useState } from 'react';
import { useMutation } from 'react-query';
import { CountryService, ICountry } from '../services/country.service';
import {useNavigate } from 'react-router-dom'
const CreateCountry = () => {
    const [data, setData] = useState<ICountry>({
        id:5,
        image:'',
        population:'',
        title:''
    } as ICountry)
    const navigate = useNavigate();
    const {isLoading,mutateAsync} = useMutation('create country', (data: ICountry) => CountryService.create(data), {
        onSuccess: () => {
            navigate('/')
        },
        onError: (error: any) => {
            alert(error.message)
        } 
    } )

    const handleSubmit = async (e:any) => {
        e.preventDefault()   
        await mutateAsync(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter id' type={'text'} value={data.id} onChange={(e) => setData({...data,id:+e.target.value})}/>
                <input placeholder='enter id' type={'text'} value={data.image} onChange={(e) => setData({...data,image:e.target.value})}/>
                <input placeholder='enter id' type={'text'} value={data.title} onChange={(e) => setData({...data,title:e.target.value})}/>
                <input placeholder='enter id' type={'text'} value={data.population} onChange={(e) => setData({...data,population:e.target.value})}/>
                <button disabled={isLoading}>create</button>
            </form>
        </div>
    );
};

export default CreateCountry;