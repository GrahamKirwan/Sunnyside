import { StyledTestimonial } from "./styles/Testimonials.styled"

export default function Testimonial(props) {
    return (
        <StyledTestimonial>
            <img src={props.data.image} alt={props.data.image}></img>
            <p>{props.data.para}</p>
            <h4>{props.data.name}</h4>
            <h5>{props.data.position}</h5>
        </StyledTestimonial>

    )
}