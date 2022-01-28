import { StyledTestimonials, TestContainer } from "./styles/Testimonials.styled"
import Testimonial from "./Testimonial";

export default function Testimonials(props) {
  const data = props.data;
  return (
    <StyledTestimonials>
      <h3>Client Testimonials</h3>
      <TestContainer>
        {data.map((mapping) => <Testimonial key={mapping.id} data={mapping} />)}
      </TestContainer>
    </StyledTestimonials>
  );
}
